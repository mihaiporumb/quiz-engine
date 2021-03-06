﻿using Qubiz.QuizEngine.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Qubiz.QuizEngine.Database.Repositories
{
    public interface IOptionRepository
    {
        void AddOptionsAsync(OptionDefinition[] options);
        void UpdateOptionsAsync(OptionDefinition[] options);
        void DeleteOptionsAsync(OptionDefinition[] options);
        Task<IEnumerable<OptionDefinition>> GetOptionsByQuestionIDAsync(Guid id);
	}
}