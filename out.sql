PGDMP          1            
    z            tourdine    14.4    14.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    65586    tourdine    DATABASE     l   CREATE DATABASE tourdine WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE tourdine;
                postgres    false                        3079    81970 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false                       0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    81981 
   restaurant    TABLE     �  CREATE TABLE public.restaurant (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL,
    city character varying NOT NULL,
    hours character varying NOT NULL,
    categories character varying NOT NULL,
    stars character varying NOT NULL,
    website character varying NOT NULL,
    review_count integer NOT NULL,
    contact character varying NOT NULL,
    photo character varying NOT NULL
);
    DROP TABLE public.restaurant;
       public         heap    postgres    false    2            �            1259    81987    review    TABLE     �   CREATE TABLE public.review (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    stars character varying NOT NULL,
    text character varying NOT NULL,
    "userId" uuid,
    "restaurantId" uuid
);
    DROP TABLE public.review;
       public         heap    postgres    false    2            �            1259    81993    user    TABLE     �   CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    photo character varying
);
    DROP TABLE public."user";
       public         heap    postgres    false    2            t           2606    82000 %   review PK_2e4299a343a81574217255c00ca 
   CONSTRAINT     e   ALTER TABLE ONLY public.review
    ADD CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.review DROP CONSTRAINT "PK_2e4299a343a81574217255c00ca";
       public            postgres    false    211            r           2606    82002 )   restaurant PK_649e250d8b8165cb406d99aa30f 
   CONSTRAINT     i   ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.restaurant DROP CONSTRAINT "PK_649e250d8b8165cb406d99aa30f";
       public            postgres    false    210            v           2606    82004 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    212            x           2606    82006 #   user UQ_e12875dfb3b1d92d7d7c5377e22 
   CONSTRAINT     c   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22";
       public            postgres    false    212            y           2606    82007 %   review FK_1337f93918c70837d3cea105d39    FK CONSTRAINT     �   ALTER TABLE ONLY public.review
    ADD CONSTRAINT "FK_1337f93918c70837d3cea105d39" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.review DROP CONSTRAINT "FK_1337f93918c70837d3cea105d39";
       public          postgres    false    3190    211    212            z           2606    82012 %   review FK_209aeb49a7aebc856b84b940a41    FK CONSTRAINT     �   ALTER TABLE ONLY public.review
    ADD CONSTRAINT "FK_209aeb49a7aebc856b84b940a41" FOREIGN KEY ("restaurantId") REFERENCES public.restaurant(id) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.review DROP CONSTRAINT "FK_209aeb49a7aebc856b84b940a41";
       public          postgres    false    211    3186    210           