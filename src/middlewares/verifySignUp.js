const Account = require('../models/Account');

const checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Email
    Account.findOne({
      email: req.body.email
    }).exec((err, account) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (account) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
    });
    next();
  };
//   const checkRolesExisted = (req, res, next) => {
//     if (req.body.role) {
//       for (let i = 0; i < req.body.role.length; i++) {
//         if (!Account.includes(req.body.role[i])) {
//           res.status(400).send({
//             message: `Failed! Role ${req.body.role[i]} does not exist!`
//           });
//           return;
//         }
//       }
//     }
//     next();
//   };

  module.exports = {
    checkDuplicateUsernameOrEmail,
    // checkRolesExisted
  };