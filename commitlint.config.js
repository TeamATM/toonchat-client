module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'sentence-case'],
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
        '🐛 Hot-Fix',
        'Perf',
        'Refactor',
        'Revert',
        'Style',
        'Test',
      ],
    ],
  },
};
