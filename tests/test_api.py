# 3rd party modules
from django.core.urlresolvers import reverse
from django.utils import timezone

from rest_framework.test import APITestCase
from rest_framework import status

# Own
from pjfeedreader.models import Category, Feed
from .factories import CategoryFactory, FeedFactory


class CategoryAPITest(APITestCase):

    def test_category_api_returns_existing_items(self):
        """
        Test that the API returns existing categories
        At the same time test that API exists
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

        # Create category
        data = {'name': 'Category 1', 'slug': 'Slug1'}
        response = self.client.post(reverse('category-list'),
                                    data, format='json')

        # Was the category created successfully
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Category.objects.count(), 1,
                         'Should be one category in database')
        self.assertEqual(Category.objects.get().name, 'Category 1')

    def test_category_returns_error_if_fields_are_missing(self):
        pass

    def test_category_returns_error_if_field_values_are_invalid(self):
        pass


class FeedAPITest(APITestCase):

    def test_feed_api_returns_existing_items(self):
        """
        Test the API exists and can return existing items
        """

        # Create feeds
        FeedFactory()
        FeedFactory()

        # Get feed list
        response = self.client.get(reverse('feed-list'))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2,
                         'There should be two categories returned')

    def test_feed_can_be_created(self):
        """
        Tests that category can be creted using POST-request
        """

        # Create Feed, Feed needs a category as well
        category_name = 'TestCategory'
        CategoryFactory(name=category_name)
        date_checked = timezone.now()
        date_updated = timezone.now()

        data = {
            'title': 'Title 1', 'category': 1,
            'date_checked': date_checked,
            'date_updated': date_updated,
            'feed_url': 'http://blaa.com',
        }
        response = self.client.post(reverse('feed-list'),
                                    data, format='json')

        # Was the Feed created successfully
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Feed.objects.count(), 1,
                         'Should be one category in database')
        self.assertEqual(Feed.objects.get().title, 'Title 1')
        self.assertEqual(response.data['category']['name'], category_name,
                         "Category name should be {0}".format(category_name))
