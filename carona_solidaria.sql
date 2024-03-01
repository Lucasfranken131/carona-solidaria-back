-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Tempo de geração: 01-Mar-2024 às 02:02
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `carona_solidaria`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `chamadas`
--

CREATE TABLE `chamadas` (
  `id_call` int(11) NOT NULL,
  `initial_location` varchar(255) NOT NULL,
  `final_location` varchar(255) NOT NULL,
  `call_creator` varchar(150) NOT NULL,
  `call_creator_number` int(8) NOT NULL,
  `call_acceptor` varchar(150) NOT NULL,
  `active` varchar(10) NOT NULL DEFAULT 'ativo',
  `call_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `chamadas`
--

INSERT INTO `chamadas` (`id_call`, `initial_location`, `final_location`, `call_creator`, `call_creator_number`, `call_acceptor`, `active`, `call_date`) VALUES
(1, '', '', '', 0, '', 'inativo', '2024-02-24'),
(2, '', '', 'Felipe', 0, '', 'inativo', '2024-02-24'),
(3, '0909', '009', 'Leandro', 0, 'Pilé', 'inativo', '2024-02-24'),
(4, '90', '909', 'Jussara', 40028922, 'Não possui', 'inativo', '2024-02-24'),
(5, '09', 'dasdasd', 'Joséfina', 74008912, 'Pelé', 'inativo', '2024-02-24'),
(6, 'sad09asd', 'asd9as0d0as9d', 'Gabriel Zimmer', 91200630, 'Lucas Albuquerque Franco', 'inativo', '2024-02-24'),
(7, 'São Sebastião d\'Aguinhas mornas', 'Centro de Floripa', 'Lucas Albuquerque Franco', 40028922, 'Disponível', 'ativo', '2024-02-29'),
(8, 'São Sebastião d\'Aguinhas mornas', 'Centro de Floripa', 'Lucas Albuquerque Franco', 40028922, 'Disponível', 'ativo', '2024-02-29'),
(9, 'Ponto de Partida', 'Ponto Final', 'Lucas Albuquerque Franco', 40028922, 'Disponível', 'ativo', '2024-02-29');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` int(25) NOT NULL,
  `age` int(3) NOT NULL,
  `sex` enum('Masculino','Feminino','Outro','Prefiro não informar') NOT NULL,
  `phone_number` int(11) NOT NULL,
  `turn` varchar(40) NOT NULL,
  `car_model` varchar(55) NOT NULL,
  `plate` varchar(10) NOT NULL,
  `user_type` enum('Motorista','Passageiro','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `name`, `cpf`, `email`, `password`, `age`, `sex`, `phone_number`, `turn`, `car_model`, `plate`, `user_type`) VALUES
(1, 'Gabriel Zimmer', '192292', 'teste_put@aluno.fmp.edu.br', 0, 120, 'Masculino', 12345678, 'Matutino', 'Não possui', 'Não possui', 'Passageiro'),
(3, 'Gabriel Zimmer', '19293', 'tete_post@aluno.fmp.edu.br', 0, 120, 'Masculino', 12345678, '', 'Não possui', 'Não possui', 'Motorista'),
(6, 'Lucas Albuquerque Franco', '222.444.111', 'lucas.franco@aluno.fmpsc.edu.br', 0, 20, 'Prefiro não informar', 40028922, 'Matutino', 'Não possuo', 'Não possuo', 'Motorista'),
(7, 'Carlos Eduardo Morais', '01239123091', 'lucas131hmoueoke@gmail.com', 123123123, 19, 'Masculino', 40028922, 'Noturno', 'Peugeot Tunado', 'Rancou', 'Motorista'),
(9, 'Jussara dos Reis Silva', '0123912', 'asdasd@gmail.com', 1234, 54, 'Feminino', 40028922, 'Matutino', '', '', 'Passageiro'),
(10, 'Karoliny Karol', '12349282', 'karol.karol@aluno.fmpsc.edu.br', 1234123, 24, 'Feminino', 12391203, '', 'Não possui', 'Não possui', 'Passageiro'),
(12, 'Jussara dos Reis Silva', '01239122309', 'lucas131hue22oke@gmail.com', 213123, 30, 'Masculino', 12391203, '', 'Não possui', 'Não possui', 'Passageiro'),
(15, 'Eduardo Roth', '012.391.912', 'eduardo.roth@aluno.fmpsc.edu.br', 2147483647, 21, 'Masculino', 12312312, 'Matutino', 'Não possui', 'Não possui', 'Passageiro'),
(16, 'Gustavo Borges', '202.922.229', 'gustavo.borges@aluno.fmpsc.edu.br', 2147483647, 21, 'Masculino', 9120912, 'Noturno', 'Não possui', 'Não possui', 'Passageiro'),
(17, 'Creuzidéia dos Santos Amorreu', '131.222.113', 'caduco@aluno.fmpsc.edu.br', 0, 29, 'Feminino', 92022292, 'Vespertino', 'Não possui', 'Não possui', 'Passageiro');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `chamadas`
--
ALTER TABLE `chamadas`
  ADD PRIMARY KEY (`id_call`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `chamadas`
--
ALTER TABLE `chamadas`
  MODIFY `id_call` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
