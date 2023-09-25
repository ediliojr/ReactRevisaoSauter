# Generated by Django 4.0 on 2023-03-12 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('ID', models.AutoField(primary_key=True, serialize=False)),
                ('Nome', models.CharField(max_length=40)),
                ('Sobrenome', models.CharField(max_length=500)),
                ('Email', models.EmailField(max_length=150, unique=True, verbose_name='Email')),
                ('Data_nascimento', models.DateField(blank=True, null=True, verbose_name='Data Nascimento')),
                ('Data_cadastro', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]