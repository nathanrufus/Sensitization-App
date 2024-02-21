"""empty message

Revision ID: 7d849f815bd8
Revises: 9fcb92b0033f
Create Date: 2024-02-19 17:13:48.240265

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7d849f815bd8'
down_revision = '9fcb92b0033f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)

    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('profiles', schema=None) as batch_op:
        batch_op.alter_column('post_id',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('profiles', schema=None) as batch_op:
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)
        batch_op.alter_column('post_id',
               existing_type=sa.INTEGER(),
               nullable=False)

    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)

    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)

    # ### end Alembic commands ###
