# 3rd party modules
from django.core.urlresolvers import reverse

from rest_framework.test import APITestCase
from rest_framework import status

# Own
from .factories import CategoryFactory


class CategoryAPITest(APITestCase):

    def setUp(self):
        """
        Create a couple of factories
        """

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
