using DeToiServerCore.Models.FreelanceQuiz;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DeToiServerData.Configurations
{
    internal class QuizQuestionConfiguration : EntityTypeConfigurationBaseClass<QuizQuestion>
    {
        protected override void OnConfigure(EntityTypeBuilder<QuizQuestion> builder)
        {
            builder.HasKey(qq => new { qq.QuizId, qq.QuestionId });

            builder.HasOne(qq => qq.Quiz)
                .WithMany(q => q.QuizQuestions)
                .HasForeignKey(qq => qq.QuizId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(qq => qq.Question)
                .WithMany(q => q.QuizQuestions)
                .HasForeignKey(qq => qq.QuestionId)
                .OnDelete(DeleteBehavior.NoAction);

            // Optionally, set the table name for the joint table
            builder.ToTable("QuizQuestions");
        }
    }

    internal class FreelanceQuizQuestionConfiguration : EntityTypeConfigurationBase<FreelanceQuizQuestion>
    {
        protected override void OnConfigure(EntityTypeBuilder<FreelanceQuizQuestion> builder)
        {
            builder.HasMany(fqq => fqq.Answers)
                .WithOne(fqa => fqa.Question)
                .HasForeignKey(fqa => fqa.QuestionId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }

    internal class FreelanceQuizAnswerConfiguration : EntityTypeConfigurationBase<FreelanceQuizAnswer>
    {
        protected override void OnConfigure(EntityTypeBuilder<FreelanceQuizAnswer> builder)
        {
        }
    }

    internal class FreelanceQuizConfiguration : EntityTypeConfigurationBase<FreelanceQuiz>
    {
        protected override void OnConfigure(EntityTypeBuilder<FreelanceQuiz> builder)
        {
        }
    }

    internal class FreelanceCorrectQuestionConfiguration 
        : EntityTypeConfigurationBaseClass<FreelanceCorrectQuestion>
    {
        protected override void OnConfigure(EntityTypeBuilder<FreelanceCorrectQuestion> builder)
        {
            builder.HasKey(cq => new { cq.ResultId, cq.QuestionId });

            builder.HasOne(cq => cq.Result)
                .WithMany(r => r.CorrectQuestions)
                .HasForeignKey(cq => cq.ResultId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(cq => cq.Question)
                .WithMany(qq => qq.FreelanceCorrectQuestions)
                .HasForeignKey(cq => cq.QuestionId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }

    internal class FreelanceQuizResultConfiguration : EntityTypeConfigurationBase<FreelanceQuizResult>
    {
        protected override void OnConfigure(EntityTypeBuilder<FreelanceQuizResult> builder)
        {
            builder.HasOne(qr => qr.Freelance)
                .WithMany(fl => fl.QuizHistory)
                .HasForeignKey(qr => qr.FreelanceId)
                .OnDelete(DeleteBehavior.ClientCascade);
        }
    }
}
