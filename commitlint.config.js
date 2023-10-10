module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: './custom-parser',
  rules: {
    'type-case': [2, 'always', 'sentence-case'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'Build',
        'Chore',
        'CI',
        'Docs',
        'Feat',
        'Fix',
        '🐝 Fix',
        'Hot-Fix',
        '🐛 Hot-Fix',
        'Refactor',
        'Revert',
        'Style',
        'Test',
      ],
    ],
  },
};
