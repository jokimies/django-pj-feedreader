#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
test_feedcategory_model_django-pj-feedreader
--------------------------------------------

Tests for `django-pj-feedreader` FeedCategory model.
"""

# 3rd party
import factory

from django.test import TestCase

# Own
from pjfeedreader.models import FeedCategory


class FeedCategoryFactory(factory.django.DjangoModelFactory):

    """
    Factory for creating feed categories
    """

    class Meta:
        model = FeedCategory

    # By default name will be 'Category 1' for the first category,
    # 'Category 2' for the second and so on
    name = factory.Sequence(lambda n: 'Category {0}'.format(n))

    # Same for slug
    slug = factory.Sequence(lambda n: 'Slug {0}'.format(n))


#
# Tests
#
class FeedCategoryModelTest(TestCase):

    longMessage = True

    def setUp(self):
        pass

    def test_saving_category(self):
        category1 = FeedCategoryFactory()
        category2 = FeedCategoryFactory()

        saved_categories = FeedCategory.objects.all()
        self.assertEqual(saved_categories.count(), 2,
                         "Should be two categories in db")
        pass

    def tearDown(self):
        pass
