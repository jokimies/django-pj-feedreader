# 3rd party modules
from django.core.urlresolvers import reverse

from rest_framework.test import APITestCase
from rest_framework import status

# Own
from pjfeedreader.models import Category
from .factories import CategoryFactory


class CategoryAPITest(APITestCase):

    def test_category_view_returns_existing_items(self):
        """
        Test that the API returns existing categories
        """

        # First create factories
        CategoryFactory()
        CategoryFactory()

        # Get list
        response = self.client.get(reverse('category-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2,
                         'There should be two categories returned')

    def test_category_can_be_created(self):
        """
        Tests that category can be creted using POST-request
        """

        data = {'name': 'Category 1', 'slug': 'Slug1'}
        response = self.client.post(reverse('category-list'),
                                    data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Category.objects.count(), 1,
                         'Should be one category in database')
        self.assertEqual(Category.objects.get().name, 'Category 1')

    def test_category_returns_error_if_fields_are_missing(self):
        pass

    def test_category_returns_error_if_field_values_are_invalid(self):
        pass
