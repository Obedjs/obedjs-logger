# Introduction

> <b>obedjs-logger</b> A simple logging utility for [ObedJS](http:www.goal) framework

# Installation

```bash
npm i obedjs-logger

```

# Usage

import it in your project

```code
import Logger, { LogLevel } from 'obedjs-logger';
```
Then use it 

```code
const logger = new Logger(LogLevel.DEBUG, 'project.log');

logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.debug('This is a debug message');

```

# Contributing

We welcome contributions from the community! If you'd like to contribute to obedjs-logger, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and ensure the tests pass.
5. Commit your changes and push them to your forked repository.
6. Submit a pull request to the main repository.

Please follow the Code of Conduct and ensure your contributions adhere to our Contributing Guidelines.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
