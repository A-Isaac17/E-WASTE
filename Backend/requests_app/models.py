# Collection_Requests/requests_app/models.py

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class CollectionRequest(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
        ('IN_PROGRESS', 'In Progress'), # e.g., assigned to collector
        ('COLLECTED', 'Collected'),
        ('CANCELLED', 'Cancelled'),
    ]

    ACTION_CHOICES = [
        ('PICKUP_REQUESTED', 'Pickup Requested'),
        ('INFO_UPDATED', 'Information Updated'),
        ('REVIEWED_BY_ADMIN', 'Reviewed by Admin'),
        ('ASSIGNED_TO_COLLECTOR', 'Assigned to Collector'),
        ('USER_CANCELLED', 'Cancelled by User'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='collection_requests')
    item_name = models.CharField(max_length=255, help_text="Description of the item(s) for collection")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    request_date = models.DateTimeField(default=timezone.now, editable=False)
    action_taken = models.CharField(max_length=50, choices=ACTION_CHOICES, blank=True, null=True, help_text="Last significant action taken on this request")
    # Optional fields you might want:
    # address = models.TextField(blank=True, null=True)
    # preferred_collection_time = models.DateTimeField(blank=True, null=True)
    # admin_notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Request for {self.item_name} by {self.user.username} ({self.status})"

    class Meta:
        ordering = ['-request_date']