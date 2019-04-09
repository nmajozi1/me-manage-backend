import Budget from '../../schema/budgetList';
import log4js from 'log4js';
import { resolve } from 'dns';
import { rejects } from 'assert';
const logger = log4js.getLogger('Budget DB Access');

logger.level = 'debug';

exports.GetBudgetList = () => {

    return new Promise((resolve, rejects) => {

        Budget.find((error, docs) => {

            if(!error && docs) {
    
                return resolve({
                    success: true,
                    message: "Found Budget list items",
                    data: docs
                })
    
            } else {

                return rejects({
                    success: false,
                    message: 'Epic Fail',
                    data: error
                })

            }
        });

    })

}

exports.CreateBudget = (budgetData) => {

    return new Promise((resolve, rejects) => {

        Budget.findOne({item: budgetData.item}, (error, docs) => {
            if(!error && docs) {

                return resolve({
                    success: false,
                    message: "Budget Item already exists, please update the item",
                    data: docs
                });

            } else {

                let budget = new Budget({
                    item:       budgetData.item,
                    amount:     budgetData.amount,
                    payment:    budgetData.payment
                })

                budget.save((saveErr, saveDocs) => {

                    if(!saveErr && saveDocs) {

                        return resolve({
                            success: true,
                            message: "Budget saved successfully",
                            data: saveDocs
                        })

                    } else {

                        return rejects({
                            success: false,
                            message: "Failed to save the budget item, please contact support",
                            data: saveErr
                        })
                    }

                });

            }
        })

    })

}