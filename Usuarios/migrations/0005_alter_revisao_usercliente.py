# Generated by Django 4.0 on 2023-09-25 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuarios', '0004_revisao_userurdideira'),
    ]

    operations = [
        migrations.AlterField(
            model_name='revisao',
            name='UserCliente',
            field=models.CharField(max_length=40),
        ),
    ]
