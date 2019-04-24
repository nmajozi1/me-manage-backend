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

exports.updateBudget = (budgetData) => {

    return new Promise((resolve, rejects) => {

        Budget.findOne({item: budgetData.item}, (error, docs) => {

            if(!error && docs) {

                docs.amount = budgetData.amount;
                docs.payment = budgetData.payment;

                docs.save((saveErr, saveDocs) => {
                    
                    if(!saveErr && saveDocs) {

                        return resolve({
                            success: true,
                            message: "Budget item updated successfully",
                            data: saveDocs
                        })

                    } else {

                        return rejects({
                            success: false,
                            message: "Failed to update the budget item",
                            data: saveErr
                        });

                    }

                });
            } else {

                return rejects({
                    success: false,
                    message: "Error updating budget item, please contact support."
                });

            }

        });

    });

}

exports.PaymentUpdate = (budgetData) => {

    if(budgetData.payment === false) { budgetData.payment = true; } else { budgetData.payment = false; };

    return new Promise((resolve, rejects) => {

        Budget.findOne({item: budgetData.item}, (error, docs) => {

            if(!error && docs) {

                docs.payment = budgetData.payment;

                docs.save((saveErr, saveDocs) => {

                    if(!saveErr && saveDocs) {

                        return resolve({
                            success: true,
                            message: "Budget Payment saved successfully",
                            data: saveDocs
                        })

                    } else {

                        return rejects({
                            success: false,
                            message: "Payment update failed.",
                            data: saveErr
                        })

                    }

                })

            } else {

                return rejects({
                    success: false,
                    message: "Could not find item",
                    data: "Item not found"
                });
            }

        });

    });

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
                    payment:    false
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

exports.delete = (budgetData) => {

    return new Promise((resolve, reject) => {

        Budget.remove({item: budgetData.item}, (error, docs) => {

            if(!error && docs) {

                return resolve({
                    success: true,
                    message: 'Budget Item has been removed.',
                    data: docs
                });

            } else {

                return reject({
                    success: false,
                    message: 'Budget item does not exist',
                    data: error
                });

            }
        });
    });
}