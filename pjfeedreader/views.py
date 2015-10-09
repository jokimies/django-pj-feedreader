# 3rd party modules
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

# Own
from .models import Category, Feed
from .serializers import CategorySerializer, FeedSerializer


class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def create(self, request):

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Category.objects.create_category(**serializer.validated_data)
            return Response(serializer.validated_data,
                            status=status.HTTP_201_CREATED)
        return Response({
            'status': 'Bad request',
            'message': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


class FeedViewSet(viewsets.ModelViewSet):

    queryset = Feed.objects.all()
    serializer_class = FeedSerializer

    def create(self, request):

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Category.objects.create_category_blaa(**serializer.validated_data)
            return Response(serializer.validated_data,
                            status=status.HTTP_201_CREATED)
