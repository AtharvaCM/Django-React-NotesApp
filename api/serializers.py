from rest_framework.fields import Field
from rest_framework.serializers import ModelSerializer
from .models import Note


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'  # or pass a list ['', ''] of attrs
