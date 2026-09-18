-- prisma migrate dev needs to create/drop a shadow database, so grant the
-- app user broad privileges (this is a local/dev database container).
GRANT ALL PRIVILEGES ON *.* TO 'whenly'@'%';
FLUSH PRIVILEGES;
