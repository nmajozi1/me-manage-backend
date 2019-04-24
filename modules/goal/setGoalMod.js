import log4js from 'log4js';
import goal from './goalDBAccess';
const logger = log4js.getLogger('Set Goal Module');

logger.level = 'debug';

exports.getGoals = () => {

    return new Promise((resolve, rejects) => {

        goal.getGoals().then(response => { return resolve(response)}).catch(error => { return rejects(error)});

    });
}

exports.createGoals = (goalData) => {

    return new Promise((resolve, rejects) => {

        goal.createGoal(goalData).then(response => { return resolve(response)}).catch(error => { return rejects(error)});

    });

}

exports.updateGoal = (goalData) => {

    return new Promise((resolve, rejects) => {

        goal.updateGoal(goalData).then(response => { return resolve(response)}).catch(error => { return rejects(error)});

    });

}

exports.deleteGoals = (goalData) => {

    return new Promise((resolve, rejects) => {

        goal.deleteGoal(goalData).then(response => { return resolve(response)}).catch(error => { return rejects(error)});

    });

}