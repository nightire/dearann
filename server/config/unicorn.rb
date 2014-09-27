root = "/srv/dearann/server"

pid               "#{root}/tmp/pids/unicorn.pid"
listen            "/tmp/unicorn.dearann.sock"
timeout           30
stdout_path       "#{root}/log/unicorn.log"
stderr_path       "#{root}/log/unicorn.log"
worker_processes  2
working_directory root
