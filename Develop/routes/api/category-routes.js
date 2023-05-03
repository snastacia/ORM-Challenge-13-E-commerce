const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [Product]
    });
    return res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    if (!categories) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategories = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(updatedCategories)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update category" });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategories = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(deleteCategories);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
