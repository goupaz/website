# Generated by Django 2.2 on 2019-10-15 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0003_auto_20191015_1230'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='cb_company_logo',
        ),
        migrations.RemoveField(
            model_name='company',
            name='cb_name',
        ),
        migrations.RemoveField(
            model_name='company',
            name='company_logo',
        ),
        migrations.AlterField(
            model_name='company',
            name='logo',
            field=models.FileField(default='8af3c0b7-6f12-4d54-8d64-5c49f40f28fb.png', upload_to=''),
        ),
    ]
