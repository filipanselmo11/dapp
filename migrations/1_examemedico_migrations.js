const ExameMedico = artifacts.require("ExameMedico");

module.exports = function(deployer) {
  deployer.deploy(ExameMedico);
};
