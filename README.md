# OpenBlog
OpenBlog is a blog in which anyone want to write an article can

# Project Configuration 
1. git clone https://github.com/JulesSinger/openblog.git
2. copy the .env.example in a new fil .env, then complete the values with your configuration
3. enter "composer install" 
4. php artisan key:generate
5. npm install

# Setup the database
1. php artisan migrate
2. php artisan db:seed

# Run the project
1. Open a terminal, and start the backend : "php artisan serve"
2. Open an other terminal, and start the frontend : "npm run dev"
3. Open your browser and go to localhost
