# Generated by Django 2.2 on 2019-10-09 18:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('short_description', models.CharField(max_length=400, null=True)),
                ('header_image', models.FileField(blank=True, null=True, upload_to='')),
                ('details', models.TextField()),
                ('location_lat', models.FloatField(blank=True, null=True)),
                ('location_lon', models.FloatField(blank=True, null=True)),
                ('location_title', models.CharField(blank=True, max_length=250, null=True)),
                ('location_address', models.CharField(blank=True, max_length=250, null=True)),
                ('event_date_start', models.DateTimeField(blank=True, null=True)),
                ('event_date_end', models.DateTimeField(blank=True, null=True)),
                ('spot_count', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_publish', models.BooleanField(default=False)),
                ('is_approved', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='EventType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='EventAttendee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Event')),
            ],
        ),
    ]
