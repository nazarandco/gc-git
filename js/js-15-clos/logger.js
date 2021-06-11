//put your code here
const createLogger = () => {
  let memo = [];

  function warn(strWarn) {
    return memo.unshift({
      message: strWarn,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  function error(strError) {
    return memo.unshift({
      message: strError,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(strLog) {
    return memo.unshift({
      message: strLog,
      dateTime: new Date(),
      type: 'log',
    });
  }

  function getRecords(type) {
    if (type) {
      return memo.filter((el) => el.type === type);
    } else {
      return memo;
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
const logger2 = createLogger();

logger.log('User logged in');
logger.warn('User try to restricted page');
logger.error('Unexpected error on the site');
logger.log('User logged out');

console.log(logger.getRecords());
logger.getRecords('logy');
logger.getRecords('error');
logger.getRecords('warn');

logger2.log('How are you ?');
logger2.log('Hey, buddy !');
logger2.getRecords('log');
logger2.getRecords();
