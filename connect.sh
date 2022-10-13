#! /usr/bin/expect -f

set force_conservative 1;

set timeout 2
spawn ssh area@51.178.29.26
expect "password: $"
send "area\n"
interact