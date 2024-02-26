-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Tempo de geração: 26-Fev-2024 às 02:37
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
  `id_driver` int(11) DEFAULT NULL,
  `id_passenger` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `call_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `chamadas`
--

INSERT INTO `chamadas` (`id_call`, `initial_location`, `final_location`, `id_driver`, `id_passenger`, `active`, `call_date`) VALUES
(1, 'Rua são miguel, São Sebastião', 'Centro de Palhoça', 2, 0, 1, '2024-02-24'),
(2, 'mkasdo', 'mopadaspom', 0, 9, 1, '2024-02-24'),
(3, '0909', '009', NULL, 10, 1, '2024-02-24'),
(4, '90', '909', 0, 9, 1, '2024-02-24'),
(5, '09', 'dasdasd', NULL, NULL, 1, '2024-02-24'),
(6, 'sad09asd', 'asd9as0d0as9d', 1, 5, 1, '2024-02-24');

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
  `turn` enum('Matutino','Verspertino','Noturno','') NOT NULL,
  `car_model` varchar(55) NOT NULL,
  `plate` varchar(10) NOT NULL,
  `user_type` enum('Motorista','Passageiro','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `name`, `cpf`, `email`, `password`, `age`, `sex`, `phone_number`, `turn`, `car_model`, `plate`, `user_type`) VALUES
(1, 'Gabriel Zimmer', '192292', 'teste_put@aluno.fmp.edu.br', 0, 120, 'Masculino', 12345678, 'Matutino', 'Não possui', 'Não possui', 'Passageiro'),
(3, 'Gabriel Zimmer', '19293', 'tete_post@aluno.fmp.edu.br', 0, 120, 'Masculino', 12345678, '', 'Não possui', 'Não possui', 'Motorista');

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
  MODIFY `id_call` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
