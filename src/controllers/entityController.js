const Entity = require('../models/Entity');
exports.createEntity = async (req, res) => {
  const entity = new Entity({ ...req.body, createdBy: req.user });
  await entity.save();
  res.json(entity);
};
exports.getEntities = async (req, res) => {
  const entities = await Entity.find();
  res.json(entities);
};
exports.updateEntity = async (req, res) => {
  const entity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(entity);
};
exports.deleteEntity = async (req, res) => {
  await Entity.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
};