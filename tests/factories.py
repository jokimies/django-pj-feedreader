# -*- coding: utf-8 -*-
"""
Factories needed in testing
"""

# 3rd party
import factory

from django.utils import timezone

# Own
from pjfeedreader.models import Category, Feed


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


class FeedFactory(factory.django.DjangoModelFactory):
    """
    Factory for creating feeds
    """

    class Meta:
        model = Feed

    title = factory.Sequence(lambda n: 'Title {0}'.format(n))
    category = factory.SubFactory(CategoryFactory)
    date_checked = timezone.now()
    date_updated = timezone.now()
    feed_url = factory.Sequence(lambda n: 'http://www.snl.com/{0}'.format(n))
