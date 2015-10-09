# -*- coding: utf-8 -*-
"""
Factories needed in testing
"""

# 3rd party
import factory

# Own
from pjfeedreader.models import Category


class CategoryFactory(factory.django.DjangoModelFactory):

    """
    Factory for creating feed categories
    """

    class Meta:
        model = Category

    # By default name will be 'Category 1' for the first category,
    # 'Category 2' for the second and so on
    name = factory.Sequence(lambda n: 'Category {0}'.format(n))

    # Same for slug
    slug = factory.Sequence(lambda n: 'Slug {0}'.format(n))
