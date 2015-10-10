# 3rd party modules
from rest_framework import viewsets

# Own
from .models import Category, Feed
from .serializers import CategorySerializer, FeedSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    Category view, no need to define own list, create, etc. methods
    """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FeedViewSet(viewsets.ModelViewSet):

    queryset = Feed.objects.all()
    serializer_class = FeedSerializer
