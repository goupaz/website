# Generated by Django 2.2 on 2019-10-11 17:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0002_auto_20191009_1119'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='is_deleted',
            new_name='is_rejected',
        ),
    ]
