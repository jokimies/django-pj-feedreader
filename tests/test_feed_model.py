#!/usr/bin/env python
# -*- coding: utf-8 -*-

# 3rd party
import factory

from django.test import TestCase
from django.utils import timezone

# Own
from pjfeedreader.models import Feed
from .test_feedcategory_model import FeedCategoryFactory


class FeedFactory(factory.django.DjangoModelFactory):
    """
    Factory for creating feeds
    """

    class Meta:
        model = Feed

    title = factory.Sequence(lambda n: 'Title {0}'.format(n))
    category = factory.SubFactory(FeedCategoryFactory)
    date_checked = timezone.now()
    date_updated = timezone.now()
    feed_url = "http://www.snl.com/irweblinkx/rss/prfeed.aspx?iid=4087483"


#
# Tests
#
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
