# Generated by Django 4.0 on 2023-03-12 20:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Usuarios', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='Data_cadastro',
            new_name='UserData_cadastro',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='Data_nascimento',
            new_name='UserData_nascimento',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='Email',
            new_name='UserEmail',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='ID',
            new_name='UserId',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='Nome',
            new_name='UserNome',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='Sobrenome',
            new_name='UserSobrenome',
        ),
    ]