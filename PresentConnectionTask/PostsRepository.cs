using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PresentConnectionTask
{
    public interface IPostsRepository
    {
        Task<List<Post>> GetAllAsync();
        Task<Post> GetAsync(int postId);
        Task InsertAsync(Post post);
    }

    public class PostsRepository : IPostsRepository
    {
        private readonly SystemContext _systemContext;

        public PostsRepository(SystemContext systemContext)
        {
            _systemContext = systemContext;
        }

        public async Task<List<Post>> GetAllAsync()
        {
            return await _systemContext.Posts.ToListAsync();
        }
        public async Task<Post> GetAsync(int postId)
        {
            return await _systemContext.Posts.FirstOrDefaultAsync(o => o.Id == postId);
        }

        public async Task InsertAsync(Post post)
        {
            _systemContext.Posts.Add(post);
            await _systemContext.SaveChangesAsync();
        }

    }
}