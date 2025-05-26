# Collection_Requests/requests_app/views.py

from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import CollectionRequest
from .serializers import CollectionRequestSerializer

class IsOwnerOrAdmin(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object or admin users to edit/delete it.
    Allows all authenticated users to list and create.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the request or admin.
        return obj.user == request.user or request.user.is_staff

class CollectionRequestViewSet(viewsets.ModelViewSet):
    queryset = CollectionRequest.objects.all().order_by('-request_date')
    serializer_class = CollectionRequestSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdmin] # Apply custom permission

    def get_queryset(self):
        """
        This view should return a list of all the collection requests
        for the currently authenticated user, unless they are an admin.
        """
        user = self.request.user
        if user.is_staff: # Admin users see all requests
            return CollectionRequest.objects.all().order_by('-request_date')
        return CollectionRequest.objects.filter(user=user).order_by('-request_date')

    def perform_create(self, serializer):
        # Automatically set the user to the currently logged-in user
        serializer.save(user=self.request.user)

    # Example of a custom action for an admin to approve a request
    # To call this: PATCH /api/requests/{id}/approve/
    # from rest_framework.decorators import action
    # @action(detail=True, methods=['patch'], permission_classes=[permissions.IsAdminUser])
    # def approve(self, request, pk=None):
    #     collection_request = self.get_object()
    #     if collection_request.status == 'PENDING':
    #         collection_request.status = 'APPROVED'
    #         collection_request.action_taken = 'REVIEWED_BY_ADMIN' # Or a more specific action
    #         collection_request.save()
    #         return Response({'status': 'Request approved'}, status=status.HTTP_200_OK)
    #     return Response({'status': 'Request cannot be approved or already processed'}, status=status.HTTP_400_BAD_REQUEST)