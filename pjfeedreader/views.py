# 3rd party modules
from rest_framework import viewsets

# Own
from .models import Category, Feed
from .serializers import CategorySerializer, FeedSerializer


class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
