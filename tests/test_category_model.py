#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
test_feedcategory_model_django-pj-feedreader
--------------------------------------------

Tests for `django-pj-feedreader` FeedCategory model.
"""

# 3rd party

from django.test import TestCase

# Own
from pjfeedreader.models import Category


#
# Tests
#
class FeedCategoryModelTest(TestCase):

    longMessage = True

    def setUp(self):
        pass

    def test_saving_category(self):
        # Create a couple of categories first

        saved_categories = Category.objects.all()
        self.assertEqual(saved_categories.count(), 2,
                         "Should be two categories in db")
        pass

    def tearDown(self):
        pass
