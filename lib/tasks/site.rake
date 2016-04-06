namespace :site do
  desc 'Build site to _site folder'
  task :create do
    puts 'Building site to _site folder...'
    `bundle exec jekyll build --trace`
  end

  desc 'Remove _site folder'
  task :destroy do
    puts 'Removing _site folder...'
    `rm -rf _site`
  end
end

task :site => 'site:create'
