# 1. Install Sequelize & CLI & Mysql2

	npm install --save-dev sequelize sequelize-cli mysql2

# 2. Initialize Sequelize

    npx sequelize-cli init

# 3. config/config.json修改

如果修改了端口，则添加 `port` 字段，默认为3306

# 4. 关于迁移

	npx sequelize-cli model:generate --name users --attributes email:string,password:string #生成迁移文件attributes必须字段
	npx sequelize-cli db:migrate    #运行迁移，并会创建一个SequelizeMeta表,该表可以查看哪些表迁移过
	npx sequelize-cli db:migrate:undo  #回滚，会删除SequelizeMeta表中的最后一条记录，即回滚到上一步
	npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js　＃回滚到指定的文件，不包含该文件

# 5. 关于种子

	npx sequelize-cli seed:generate --name admins #生成种子文件
	npx sequelize-cli db:seed:undo #回滚/消除种子
	npx sequelize-cli db:seed:undo:all #回滚所有
	npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data #回滚指定种子

