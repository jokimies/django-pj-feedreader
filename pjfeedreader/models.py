# -*- coding: utf-8 -*-
# Std Python imports
from __future__ import unicode_literals

# Django
from django.db import models
from django.utils.encoding import python_2_unicode_compatible


class FeedManager(models.Manager):
    def unread(self):
        return self.get_query_set().filter(posts__read=False).distinct()


@python_2_unicode_compatible
class Category(models.Model):
    name = models.CharField(max_length=64)
    slug = models.SlugField(unique=True, max_length=64)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)
        verbose_name_plural = 'categories'


@python_2_unicode_compatible
class Feed(models.Model):
    title = models.CharField(max_length=256)
    category = models.ForeignKey(Category, default=1)
    date_checked = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    url = models.URLField()

    objects = FeedManager()

    def __str__(self):
        return self.title

    def unread_posts(self):
        return self.posts.filter(read=False)

    def count_unread(self):
        return self.unread_posts().count()

    def count_total(self):

        return self.posts.count()

    class Meta:
        ordering = ('category', 'title',)
