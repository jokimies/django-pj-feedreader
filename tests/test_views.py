#!/usr/bin/env python
# -*- coding: utf-8 -*-

# 3rd party

from django.test import TestCase
from django.core.urlresolvers import reverse


class FeedIndexPageTest(TestCase):

    def test_feed_index_page_exists(self):
        """
        Tests feed index page exists
        """
        response = self.client.get(reverse('feed-index'))
        self.assertEqual(response.status_code, 200)


