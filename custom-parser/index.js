const headerPattern = /^(\W*\w*)(?:\((.*)\))?: (.*)$/;

function parse(message) {
  const match = message.match(headerPattern);

  if (!match) return null; // 혹시나 매칭되지 않는 경우를 대비

  const [, typeWithEmoji, scope, subject] = match;

  const matches = typeWithEmoji.match(/(\W*)(\w+)/);
  const type = matches ? matches[2] : null;

  return {
    header: message,
    type,
    scope,
    subject,
    body: null,
    footer: null,
    mentions: [],
    references: [],
    notes: [],
  };
}

module.exports = {
  parserOpts: {
    headerPattern,
    headerCorrespondence: ['type', 'scope', 'subject'],
    parse,
  },
};
