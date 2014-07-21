namespace :site do
  desc 'Build site to _site folder'
  task :create do
    puts 'Building site to _site folder...'
    system %Q{bundle exec compass compile}
    system %Q{bundle exec jekyll build}
  end

  desc 'Remove _site folder'
  task :destroy do
    puts 'Removing _site folder...'
    system %Q{rm -rf _site}
  end
end

task :site => 'site:create'