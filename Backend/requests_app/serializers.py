# Collection_Requests/requests_app/serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import CollectionRequest

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for User details, used for read-only representation.
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


class CollectionRequestSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True) # Show user details on read
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), source='user', write_only=True
    ) # Allow setting user by ID on write

    status_display = serializers.CharField(source='get_status_display', read_only=True)
    action_taken_display = serializers.CharField(source='get_action_taken_display', read_only=True)

    class Meta:
        model = CollectionRequest
        fields = [
            'id', 'user', 'user_id', 'item_name', 'status', 'status_display',
            'request_date', 'action_taken', 'action_taken_display'
        ]
        read_only_fields = ['id', 'request_date', 'user'] # user is set via user_id

    def create(self, validated_data):
        # If 'user' is not in validated_data (because it was submitted as user_id),
        # and the request context has a user, set it automatically.
        # This is useful if the API endpoint requires authentication.
        if 'user' not in validated_data and self.context['request'].user.is_authenticated:
            validated_data['user'] = self.context['request'].user
        return super().create(validated_data)