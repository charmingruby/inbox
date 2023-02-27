const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoriesRepository.findAll();
    return res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) return res.status(404).json({ error: 'This category already exists.' });

    return res.json(category);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) return res.status(400).json({ error: 'Name is required.' });

    const categoryAlreadyExists = await CategoriesRepository.findByName(name);

    if (categoryAlreadyExists) return res.status(400).json({ error: 'This name is already in use.' });

    const category = await CategoriesRepository.create(name);

    return res.json(category);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const categoryAlreadyExists = await CategoriesRepository.findById(id);

    if (!categoryAlreadyExists) return res.status(400).json({ error: 'Category not found.' });

    const category = await CategoriesRepository.update(id, { name });

    return res.json(category);
  }

  async delete(req, res) {
    const { id } = req.params;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) return res.status(400).json({ error: 'Category not found.' });

    await CategoriesRepository.delete(id);

    return res.sendStatus(204);
  }
}

module.exports = new CategoryController();
