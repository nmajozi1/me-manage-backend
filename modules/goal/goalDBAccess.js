import log4js from 'log4js';
import Goal from '../../schema/setGoal';

const logger = log4js.getLogger('Goal DB Access');

logger.level = 'debug';

exports.getGoals = () => {
    
    return new Promise((resolve, rejects) => {

        Goal.find((error, docs) => {

            if(!error && docs) {

                return resolve({
                    success: true,
                    message: 'Success, found the goals',
                    data: docs
                });

            } else {

                return rejects({
                    success: false,
                    message: 'Failed to retieve goals',
                    data: error
                })

            }

        });

    });
}

exports.createGoal = (goalData) => {

    return new Promise((resolve, rejects) => {

        Goal.findOne({goal: goalData.goal}, (error, docs) => {

            if(!error && docs) {

                return reject({
                    success: false,
                    message: 'Goal already exists, please update goal',
                    data: docs
                });

            } else {

                let goal = new Goal({
                    goal: goalData.goal,
                    amount: goalData.amount,
                    purchased: false
                });

                goal.save((saveErr, saveDocs) => {

                    if(!saveErr && saveDocs) {

                        return resolve({
                            success: true,
                            message: 'Saved goal successfully',
                            data: saveDocs
                        });

                    } else {

                        return rejects({
                            success: false,
                            message: 'Failed to save the goal',
                            data: saveErr
                        })
                    }
                });
            }

        });
    });
}

exports.deleteGoal = (goalData) => {

    return new Promise((resolve, rejects) => {

        Goal.remove({goal: goalData.goal}, (error, docs) => {

            if(!error && docs) {

                return resolve({
                    success: true,
                    message: 'Goal remove successfully',
                    data: docs
                });

            } else {

                return rejects({
                    success: false,
                    message: 'Error attempting to remove the goal',
                    data: error
                });

            }
        });
    })
}

exports.updateGoal = (goalData) => {

    return new Promise((resolve, rejects) => {

        Goal.findOne({goal: goalData}, (error, docs) => {

            if(!error && docs) {

                docs.amount = goalData.amount;
                docs.purchased = goalData.purchased;

                docs.save((saveErr, saveDocs) => {

                    if(!saveErr && saveDocs) {

                        return resolve({
                            success: true,
                            message: 'Successfully saved updated the goal',
                            data: saveDocs
                        });

                    } else {

                        return rejects({
                            success: false,
                            message: 'Failed to update the goal',
                            data: error
                        });
                    }
                });

            } else {

                return rejects({
                    success: false,
                    message: 'Goal does not exist',
                    data: error
                });
            }

        });
    });
}