---
layout: post
title: Plugin para slides con Rails
image: beans.jpg
logo: beans.jpg
description: Crear mi propio plugin para presentaciones con Rails.
escritor: Elton Santos
comments: true
---


<!-- letra capital  -->

<p class="intro"><span class="dropcap">A</span>prender a construir una aplicación web moderna es algo tedioso. Ruby on Rails hace que sea mucho más fácil y más divertido. Incluye todo lo necesario para crear aplicaciones fantásticas, y se puede aprender con el apoyo de la comunidad grande y agradable.</p>

> [Documentación Rails](http://guides.rubyonrails.org/)
>
> _Vamos a crear un entorno de desarrollo Ruby on Rails en Ubuntu 16.04 Xenial Xerus._
>
> Ubuntu es una de las distribuciones de Linux más fáciles de usar con una gran cantidad de documentación por lo que es un gran día para empezar. Usted podra descargar la última versión de escritorio aquí: [Versiones Ubuntu](http://releases.ubuntu.com/16.04/) Algunos de ustedes pueden optar por desarrollar en Ubuntu Server para que el entorno de desarrollo coincide con el servidor de **producción**. Lo puede encontrar en el mismo link de descarga.


## Instalación de Ruby

> Para esta instalacíon releccionaremos la versiíon **2.3.1**, cual es la versión estable actual de ruby.
>
> El primer paso es instalar algunas dependencias para Ruby. Ejecutamos las siguientes lineas de comandos:

````
sudo apt-get update

sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
````

> A continuación vamos a ser la instalación de Ruby usando uno de tres métodos. Cada uno tiene sus propias ventajas, la mayoría de las personas prefieren usar **rbenv** estos días, pero si usted está familiarizado con **RVM** que puede seguir esos pasos también. He incluido instrucciones para la instalación des el repositorio oficial de Ruby, además **rbenv** y **RVM**.
>
> Elija un método. Algunos de estos metodos dan conflictos entre sí, así que elige el que suene el más interesante para usted, o ir con mi sugerencia, **rbenv**.

*   **rbenv**


> Instalar con rbenv es un simple proceso de dos pasos. En primer lugar instalar rbenv, y luego Ruby-build:

````
cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.3.1
rbenv global 2.3.1
ruby -v
````

*   **rvm**


> La instalación de RVM es bastante simple:

````
sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm install 2.3.1
rvm use 2.3.1 --default
ruby -v
````
*   **Repositorio oficial**


> La instalación desde su repositorio oficial es bastante simple:

````
cd
wget http://ftp.ruby-lang.org/pub/ruby/2.3/ruby-2.3.1.tar.gz
tar -xzvf ruby-2.3.1.tar.gz
cd ruby-2.3.1/
./configure
make
sudo make install
ruby -v
````

> El último paso es instalar Bündler

````
gem install bundler
````

> Si hicieron la instalación por medio de rbenv es necesario que ejecuten el siguiente comando:

````
rbenv rehash
````

## Configuración de Git

> Estaremos usando Git para nuestro sistema de control de versiones por lo que vamos a configurarlo para que coincida con nuestra cuenta de **Github**. Si aún no dispone de una cuenta de **Github**, asegúrese de [registrarse](https://github.com/). Que será muy útil para el futuro.
>
>Debes utilizar mismas credenciales del registro en **Github**

````
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"
````
> El siguiente paso es tomar la llave SSH se acaba de generar y agregarlo a su cuenta de Github. Que desea copiar y pegar la salida del siguiente comando y [pegarla aquí](https://github.com/settings/ssh).

````
cat ~/.ssh/id_rsa.pub
````

> Una vez hecho esto, se puede comprobar y ver si ha funcionado:

````
ssh -T git@github.com
````

> Debe obtener un mensaje como este:

````
Hi freivincampbell! You've successfully authenticated, but GitHub does not provide shell access.
````

## Instalación de Rails

> Rails tiene muchas dependencias así que instalaremos NodeJS para el uso en los Coffeescript y entre otros assets de Rails.
>
> Para instalar NodeJS, vamos a añadir usando el repositorio oficial:

````
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
````

> Y ahora, sin más preámbulos:

````
gem install rails -v 4.2.6
````

> Si está utilizando rbenv, tendrá que ejecutar el siguiente comando:

````
rbenv rehash
````

> Ahora que ha instalado carriles, puede ejecutar los ````rails -v```` para asegurarse de que tiene todo instalado correctamente:

````
rails -v
# Rails 4.2.6
````

> Espero que hayas aprendido algo nuevo y útil. :smile: