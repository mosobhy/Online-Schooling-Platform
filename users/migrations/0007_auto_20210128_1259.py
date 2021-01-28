# Generated by Django 2.2.1 on 2021-01-28 12:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20210127_2022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='course_code',
            field=models.CharField(max_length=50, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='students',
            field=models.ManyToManyField(blank=True, related_name='enrolled_courses', to='users.User'),
        ),
        migrations.AlterField(
            model_name='result',
            name='quiz',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='taken_by', to='users.Quiz'),
        ),
        migrations.AlterField(
            model_name='result',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='quizs_reuslts', to='users.User'),
        ),
    ]
