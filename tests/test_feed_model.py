#!/usr/bin/env python
# -*- coding: utf-8 -*-

# 3rd party

from django.test import TestCase

# Own
from pjfeedreader.models import Feed
from .factories import FeedFactory


class FeedModelTest(TestCase):

    longMessage = True

    def test_saving_feed(self):

        # Create first feed
        FeedFactory()
        # And Second
        FeedFactory()

        saved_feeds = Feed.objects.all()
        self.assertEqual(saved_feeds.count(), 2,
                         "Should be two feeds in databse")
